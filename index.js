const newImage = (elementName, elementSrc, posLeft, posBottom, isItem) => {
    elementName = document.createElement('img')
    elementName.src = elementSrc
    elementName.style.position = 'fixed'
    elementName.style.left = posLeft
    elementName.style.bottom = posBottom
    if (isItem == 'yes') {
        elementName.addEventListener('dblclick', function () {
            elementName.remove()
        })
    }
    document.body.append(elementName)
}

let greenCharacter
let pineTree
let tree
let pillar
let crate
let well
let sword
let shield
let staff

newImage(greenCharacter, 'assets/green-character.gif', '100px', '100px')
newImage(pineTree, 'assets/pine-tree.png', '450px', '200px')
newImage(tree, 'assets/tree.png', '200px', '300px')
newImage(pillar, 'assets/pillar.png', '350px', '100px')
newImage(crate, 'assets/crate.png', '150px', '200px')
newImage(well, 'assets/well.png', '500px', '425px')
newImage(sword, 'assets/sword.png', '500px', '405px', 'yes')
newImage(shield, 'assets/sheild.png', '165px', '185px', 'yes')
newImage(staff, 'assets/staff.png', '600px', '100px', 'yes')



