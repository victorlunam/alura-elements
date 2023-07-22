import fs from "node:fs";
import path from "node:path";

export const readFile = (filePath) => {
  try {
    const code = fs.readFileSync(filePath, "utf-8");
    return code;
  } catch (error) {
    throw new Error(error);
  }
};

export const saveFile = (filePath, code, outputPath = "temp") => {
  try {
    const replacePath = filePath.replace(".jsx", ".js");
    const basename = path.basename(replacePath);
    const newPath = path.join(outputPath, basename);

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, {
        recursive: true,
      });
    }

    fs.writeFileSync(newPath, code);
    return newPath;
  } catch (error) {
    throw new Error(error);
  }
};
