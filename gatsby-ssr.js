const {renderToString} = require("react-dom/server")

exports.replaceRenderer = ({bodyComponent, replaceBodyHTMLString}) => {
  const bodyHTML = renderToString(bodyComponent)

  replaceBodyHTMLString(bodyHTML);
}