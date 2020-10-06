const fs = require('fs');
const { createFFmpeg } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({
  log: true,
  logger: ({ message }) => console.log(message),
  process: p => console.log(p)
});

async function pngToMp4(pngPath, name, outPathAndName, thread = 8) {
  await ffmpeg.load();
  let nameList = fs.readdirSync(pngPath)
  for (let name of nameList) {
    await ffmpeg.write(name, `${pngPath}${name}`);
  }
  await ffmpeg.run(`-r 60 -threads ${thread} -i ${name}-%d.png out.mp4`)
  const data = await ffmpeg.read('out.mp4');
  fs.writeFileSync(outPathAndName, data)
  process.exit(0);
}
module.exports = pngToMp4;