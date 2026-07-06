/**
 * Script para convertir todas las imágenes (JPG/PNG) del directorio img/ a WebP.
 * Usa sharp para compresión de alta calidad.
 * 
 * Uso: node scripts/convert-to-webp.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '..', 'img');
const QUALITY = 80; // WebP quality (0-100)

async function convertToWebP() {
    const files = fs.readdirSync(IMG_DIR);
    const imageFiles = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

    console.log(`🖼️  Found ${imageFiles.length} images to convert...\n`);

    let totalOriginal = 0;
    let totalWebP = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(IMG_DIR, file);
        const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outputPath = path.join(IMG_DIR, outputName);

        const originalSize = fs.statSync(inputPath).size;
        totalOriginal += originalSize;

        try {
            await sharp(inputPath)
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            const webpSize = fs.statSync(outputPath).size;
            totalWebP += webpSize;

            const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);
            console.log(
                `  ✅ ${file} → ${outputName}  |  ${formatBytes(originalSize)} → ${formatBytes(webpSize)}  (${savings}% smaller)`
            );
        } catch (err) {
            console.error(`  ❌ Error converting ${file}:`, err.message);
        }
    }

    console.log(`\n📊 Total: ${formatBytes(totalOriginal)} → ${formatBytes(totalWebP)}  (${((1 - totalWebP / totalOriginal) * 100).toFixed(1)}% total savings)`);
    console.log('🎉 Done!\n');
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

convertToWebP().catch(console.error);
