let show=document.getElementById('show');
let str='';
for(i in modList)
{
	let stri=`<div><h2>${modList[i].catogary}</h2><p>${modList[i].description}</p><ul>`;
	for(j in modList[i].list)
		stri+=`<li><a href="${modList[i].list[j].link}">${modList[i].list[j].name}</a>
		made by ${modList[i].list[j].author}<br>${modList[i].list[j].description}</li>`;
	stri+='</ul></div>';
	str+=stri;
}
show.innerHTML=str;