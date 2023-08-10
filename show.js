let show=document.getElementById('show');

for(i in modList)
{
	show.append(document.createElement('div'));
	let currentCatogary=show.lastChild;
	currentCatogary.append(document.createElement('h2'));
	currentCatogary.lastChild.textContent=modList[i].catogary;
	currentCatogary.append(document.createElement('p'));
	currentCatogary.lastChild.textContent=modList[i].description;
	currentCatogary.append(document.createElement('ul'));
	let currentCatogaryList=currentCatogary.lastChild;
	for(j in modList[i].list)
	{
		currentCatogaryList.append(document.createElement('li'));
		let currentText=currentCatogaryList.lastChild;
		currentText.innerHTML=`<a href="${modList[i].list[j].link}">${modList[i].list[j].name}</a> made by ${modList[i].list[j].author}<br>${modList[i].list[j].description}`;
	}
}