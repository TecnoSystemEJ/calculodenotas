import React from "react";
import ReactDOM from "react-dom/client";
import Adam from "./Adam/App";
import Alex from "./Alex/App";
import Jorge from "./Jorge/App";
import Ashy from "./Ashy/App";
import Daniel from "./Daniel/App";
import Jhonatan from "./Jhonatan/App";
import Pablo from "./Pablo/App";
import Italo from "./Italo/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const nome = 'Jorge'
root.render(
  <React.StrictMode>

    {nome == 'Adam' && <Adam />}
    {nome == 'Alex' && <Alex />}
    {nome == 'Jorge' && <Jorge />}
    {nome == 'Ashy' && <Ashy />}
    {nome == 'Daniel' && <Daniel />}
    {nome == 'Jhonatan' && <Jhonatan />}
    {nome == 'Pablo' && <Pablo />}
    {nome == 'Italo' && <Italo />}

  </React.StrictMode>
);
