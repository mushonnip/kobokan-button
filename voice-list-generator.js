const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml');

var final_voice_list = []

async function fetchFiles(dir, filter, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            fetchFiles(filePath, filter, fileList);
        } else if (filter.test(filePath)) {
            fileList.push(filePath);
        }
    });
    const validFiles = await Promise.all([
        ...fileList.map(file => parseFile(file)),
    ])

    return validFiles
}

async function parseFile(file) {
    const contains = await fs.promises.readFile(
        file,
        'utf8',
    )

    try {
        if (file.match(/\.yaml$/)) {
            const parsed = yaml.load(contains)
            // console.info(`[GENERATOR]: Parsed yaml file: [${file}]`)
            return parsed
        } else {
            const parsed = JSON.parse(contains)
            // console.info(`[GENERATOR]: Parsed json file: [${file}]`)
            return parsed
        }
    }
    catch (err) {
        console.info(`[GENERATOR]: Error parsing file [${file}]`)
        return null
    }
}

function generateVoiceList() {
    fetchFiles('./public/items/', /\.json$/).then(function (categories) {
        categories.forEach(category => {
            const category_name = category.categoryName
            const category_path = category.categoryPath
            // TODO: Fix voice_list result
            const voice_list = getVoiceListByCategory(category_path)
            final_voice_list.push({
                categoryName: category_name,
                categoryPath: category_path,
                voiceList: voice_list
            })
            console.log(final_voice_list);
            // TODO: Generate json for each locale
            fs.writeFile("src/assets/generated-voice-list-experimental.json", JSON.stringify(final_voice_list), function (err, result) {
                if (err) console.log('error', err);
            });
        })
    })
}

function getVoiceListByCategory(category_path) {
    const voice_list = fetchFiles('./public/items/' + category_path + '/', /\.yaml$/).then(function (result) {
        return result
    })
    return voice_list
}

generateVoiceList()