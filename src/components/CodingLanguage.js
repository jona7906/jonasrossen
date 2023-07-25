import Css_icon from "../svgs/icon_css.svg";
import Html_icon from "../svgs/icon_html.svg";
import React_icon from "../svgs/icon_react.svg";
import Php_icon from "../svgs/icon_php.svg";
import Nodejs_icon from "../svgs/icon_nodejs.svg";
import Devops_icon from "../svgs/icon_devops.svg";
import Mysql_icon from "../svgs/icon_mysql.svg";
import Sqlite_icon from "../svgs/icon_sqlite.svg";
import Docker_icon from "../svgs/icon_docker.svg";
import Javascript_icon from "../svgs/icon_javascript.svg";
import Phpmyadmin_icon from "../svgs/icon_phpmyadmin.svg";
import Python_icon from "../svgs/icon_python.svg";
import Django_icon from "../svgs/icon_django.svg";
import Apache_icon from "../svgs/icon_apache.svg";
import Thunderclient_icon from "../svgs/icon_thunderclient.svg";
import Postmant_icon from "../svgs/icon_postman.svg";
import Github_icon from "../svgs/icon_github.svg";
import Gitlab_icon from "../svgs/icon_gitlab.svg";
import Htmx_icon from "../svgs/icon_htmx.svg";
import Linode_icon from "../svgs/icon_linode.svg";
import Numpy_icon from "../svgs/icon_numpy.svg";
import Matplotlib_icon from "../svgs/icon_matplotlib.svg";
import Tensorflow_icon from "../svgs/icon_tensorflow.svg";
import Jupyter_icon from "../svgs/icon_jupyter.svg";
import Pandas_icon from "../svgs/icon_pandas.svg";
import Sklearn_icon from "../svgs/icon_sklearn.svg";
import Vite_icon from "../svgs/icon_vite.svg";
import Sass_icon from "../svgs/icon_scss.svg";

function CodingLanguage(props) {
  const Icons = {
    css: Css_icon,
    html: Html_icon,
    react: React_icon,
    javascript: Javascript_icon,
    php: Php_icon,
    nodejs: Nodejs_icon,
    devops: Devops_icon,
    mysql: Mysql_icon,
    sqlite: Sqlite_icon,
    docker: Docker_icon,
    phpmyadmin: Phpmyadmin_icon,
    python: Python_icon,
    django: Django_icon,
    apache: Apache_icon,
    thunderclient: Thunderclient_icon,
    postman: Postmant_icon,
    github: Github_icon,
    gitlab: Gitlab_icon,
    htmx: Htmx_icon,
    linode: Linode_icon,
    numpy: Numpy_icon,
    matplotlib: Matplotlib_icon,
    tensorflow: Tensorflow_icon,
    jupyter: Jupyter_icon,
    pandas: Pandas_icon,
    sklearn: Sklearn_icon,
    vite: Vite_icon,
    scss: Sass_icon,
  };

  const Icon = Icons[props.lan];

  console.log(props.lan);

  return (
    <img className={props.lan} alt="project coding language icon" src={Icon} />
  );
}

export default CodingLanguage;
