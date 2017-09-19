// 加载模块
const gulp = require("gulp"); // gulp
const concat = require("gulp-concat"); // 合并文件
const connect = require("gulp-connect"); // 热部署（即时刷新）
const uglify = require("gulp-uglify"); // 压缩JS
const sass = require("gulp-sass"); // 编译sass
const rename = require("gulp-rename"); // 重命名文件
const babel = require("gulp-babel"); // 编译ES6
const webserver = require("gulp-webserver");
const proxy = require("http-proxy-middleware");

//处理html
gulp.task("refreshHTML", function() {
  gulp.src("./dev/*.html").pipe(connect.reload());
});

//处理CSS任务
gulp.task("refreshCSS", function() {
  gulp.src("./dev/css/*.css").pipe(connect.reload());
});

//编译sass任务
gulp.task("compileSass", function() {
  gulp
    .src("./dev/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./dev/css"));
});

//处理JS任务
gulp.task("js", function() {
  gulp
    .src("./dev/js/**/.js")
    //编译
    .pipe(
      babel({
        presets: ["es0215"]
      })
    )
    //压缩
    .pipe(uglify())
    .pipe(gulp.dest("./dev/js/"));
});

//监听任务
gulp.task("watch", function() {
  //让connect启动一个服务器，这样它才能即时刷新浏览器
  connect.server({
    livereload: true
  });

  //检测文件的变化，执行相应的任务
  gulp.watch("./dev/*.html", ["refreshHTML"]);
  gulp.watch("./dev/css/**/*.css", ["refreshCSS"]);
  gulp.watch("./dev/js/**/*.js", ["js"]);
  gulp.watch("./dev/scss/**/*.scss", ["compileSass"]);
});

gulp.task("webserver", function() {
  gulp.src("./").pipe(
    webserver({
      host: "localhost",
      port: 8000,
      livereload: true,
      directoryListing: {
        enable: true,
        path: "./"
      },
      middleware: [
        proxy("/api", {
          target: "http://api.wangjiu.com/",
          changeOrigin: true,
          /* pathRewrite: {
            api: ""
          } */
        })
      ]
    })
  );
});

//生成最终项目
gulp.task("create", function() {
  gulp.src("./dev/js/**/*.js").pipe(gulp.dest("./dist/js/"));
  gulp.src("./dev/css/**/*.css").pipe(gulp.dest("./dist/css/"));
  gulp.src("./dev/html/**/*.html").pipe(gulp.dest("./dist/html/"));
  gulp.src("./dev/img/**/*.*").pipe(gulp.dest("./dist/img/"));
});

gulp.task("default", ["watch", "webserver"], function() {
  console.log("done.");
});
