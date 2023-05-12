import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export const removeDist = () => {
  return delPath(`${pkgPath}/Bdesign`);
};

//打包样式
export const buildStyle = () => {
  return (
    src(`${componentPath}/src/**/style/**.scss`)
      .pipe(sass())
      .pipe(autoprefixer())
      // .pipe(sass().on('error', sass.logError))
      .pipe(dest(`${pkgPath}/b-designs/lib/src`))
      .pipe(dest(`${pkgPath}/b-designs/es/src`))
  );
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
