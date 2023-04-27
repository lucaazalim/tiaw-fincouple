
class Icone {
    constructor(id, unicode) {
        this.id = id;
        this.unicode = unicode;
    }
}

const icones = [
    new Icone("fa-home", "\uF015"),
    new Icone("fa-bed", "\uF236"),
    new Icone("fa-sofa", "\uF4A0"),
    new Icone("fa-chair", "\uF6C9"),
    new Icone("fa-table", "\uF6CC"),
    new Icone("fa-lamp", "\uF0EB"),
    new Icone("fa-couch", "\uF4A8"),
    new Icone("fa-television", "\uF26C"),
    new Icone("fa-fridge", "\uF26B"),
    new Icone("fa-utensils", "\uF2E7"),
    new Icone("fa-coffee", "\uF0F4"),
    new Icone("fa-dumbbell", "\uF44B"),
    new Icone("fa-shower", "\uF2CC"),
    new Icone("fa-bath", "\uF2CD"),
    new Icone("fa-toilet-paper", "\uF71E"),
    new Icone("fa-washer", "\uF2F5"),
    new Icone("fa-thermometer-full", "\uF2C7"),
    new Icone("fa-fan", "\uF863"),
    new Icone("fa-air-conditioner", "\uF8F4"),
    new Icone("fa-window", "\uF40E"),
    new Icone("fa-door-open", "\uF52B"),
    new Icone("fa-curtain", "\uF5FA"),
    new Icone("fa-plant", "\uF06C"),
    new Icone("fa-dog", "\uF6D3"),
    new Icone("fa-cat", "\uF6C4"),
];


icones.forEach(function (icone, i) {
    $('#input-icone').append(`
        <option value="${icone.id}" style="font-family: FontAwesome">${icone.unicode}</option>
    `);
});
