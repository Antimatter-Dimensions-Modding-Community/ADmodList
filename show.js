let show=document.getElementById('show');
let str='';
for(i in modList)
{
	let stri=`<div><h2>${modList[i].category}</h2><p>${modList[i].description}</p><ul>`;
	for(j in modList[i].list){
		if(j!=0) stri+='<br>';
		stri+=`
			<li><a href="${modList[i].list[j].link}">${modList[i].list[j].name}</a>
			made by ${modList[i].list[j].author}<br>
			<div style="margin-left:15px;">${modList[i].list[j].description}</div></li>`;
	}
	stri+='</ul></div>';
	str+=stri;
}
show.innerHTML=str;

let updateTime=document.getElementById('updateTime');
updateTime.innerText=`Information of this page is last updated at ${new Date(updateTimeStamp*1000).toLocaleString()}.`