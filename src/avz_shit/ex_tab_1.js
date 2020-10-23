var d = document.getElementsByClassName(
    'border XSText rightAlignText noMarginTop highlightOnHover thickBorderBottom noTopBorder'
    )[1];
var d_d = d.getElementsByTagName('dd');
var d_t = d.getElementsByTagName('dt');

for (let i = 0; i < d_d.length; i++) {
    console.log(d_t[i].textContent);
    console.log(d_d[i].textContent);
}