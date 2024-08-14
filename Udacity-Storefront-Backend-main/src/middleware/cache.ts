// import { NextFunction, Request, Response } from 'express';
// import fs from 'fs';
// import { GetImageDto } from '../service/get-image.dto';

// export const cache = (req: Request, res: Response, next: NextFunction) => {
//   const query: GetImageDto = req?.query;
//   const { fileName, width, height } = query;
//   try {
//     const file = fs.readFileSync(
//       `public/${[fileName, width, height]?.filter((e) => e)?.join('-')}.jpg`
//     );
//     console.log('Get image from cache');
//     res
//       .writeHead(200, {
//         'Content-Type': 'image/png',
//         'Content-Length': file.length,
//       })
//       .end(file);
//   } catch (error) {
//     next();
//   }
// };
