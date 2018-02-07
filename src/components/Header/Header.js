import React from "react";

const Header = props =>
<div>
    <h1>
        Clicky Game!
    </h1>
    <h3>
        Score: {props.score} |
        Top Score: {props.topScore}
    </h3>
</div>

export default Header;
