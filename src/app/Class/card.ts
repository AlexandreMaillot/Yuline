export class Card {
  private _idCard: number; // - ID or Passocde of the card.
  private _name : string;// Name of the card.
  private _desc : string;// Card description/effect.
  private _atk : number;// The ATK value of the card.
  private _def : number;//The DEF value of the card.
  private _type : string;// The type of card you are viewing (Normal Monster, Spell Card, Trap Card, etc)
  private _level : number;// The Level/RANK of the card.
  private _race : string;//The card race which is officially called type (Spellcaster, Warrior, Insect, etc)
  private _attribute : string;// The attribute of the card.
  private _scale : number;//The Pendulum Scale Value (only Pendulum monsters will have a scale value, otherwise NULL).
  private _linkval : number;// The Link Value of the card if it's of type "Link Monster".
  private _linkmarkers : number;//The Link Markers of the card if it's of type "Link Monster".
  private _archetype : string;// The Archetype that the card belongs to. We take feedback on Archetypes here.
  private _setcode : number;//Every Card Set this card belongs to.
  private _ban_tcg : string;// status of the card on the TCG Ban List.
  private _ban_ocg : string;//The status of the card on the OCG Ban List.
  private _ban_goat : string;//The status of the card on the GOAT Format Ban List.


  constructor(idCard: number, name: string, desc: string, atk: number, def: number, type: string, level: number, race: string, attribute: string, scale: number, linkval: number, linkmarkers: number, archetype: string, setcode: number, ban_tcg: string, ban_ocg: string, ban_goat: string) {
    this._idCard = idCard;
    this._name = name;
    this._desc = desc;
    this._atk = atk;
    this._def = def;
    this._type = type;
    this._level = level;
    this._race = race;
    this._attribute = attribute;
    this._scale = scale;
    this._linkval = linkval;
    this._linkmarkers = linkmarkers;
    this._archetype = archetype;
    this._setcode = setcode;
    this._ban_tcg = ban_tcg;
    this._ban_ocg = ban_ocg;
    this._ban_goat = ban_goat;
  }

  get idCard(): number {
    return this._idCard;
  }

  set idCard(value: number) {
    this._idCard = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get atk(): number {
    return this._atk;
  }

  set atk(value: number) {
    this._atk = value;
  }

  get def(): number {
    return this._def;
  }

  set def(value: number) {
    this._def = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get race(): string {
    return this._race;
  }

  set race(value: string) {
    this._race = value;
  }

  get attribute(): string {
    return this._attribute;
  }

  set attribute(value: string) {
    this._attribute = value;
  }

  get scale(): number {
    return this._scale;
  }

  set scale(value: number) {
    this._scale = value;
  }

  get linkval(): number {
    return this._linkval;
  }

  set linkval(value: number) {
    this._linkval = value;
  }

  get linkmarkers(): number {
    return this._linkmarkers;
  }

  set linkmarkers(value: number) {
    this._linkmarkers = value;
  }

  get archetype(): string {
    return this._archetype;
  }

  set archetype(value: string) {
    this._archetype = value;
  }

  get setcode(): number {
    return this._setcode;
  }

  set setcode(value: number) {
    this._setcode = value;
  }

  get ban_tcg(): string {
    return this._ban_tcg;
  }

  set ban_tcg(value: string) {
    this._ban_tcg = value;
  }

  get ban_ocg(): string {
    return this._ban_ocg;
  }

  set ban_ocg(value: string) {
    this._ban_ocg = value;
  }

  get ban_goat(): string {
    return this._ban_goat;
  }

  set ban_goat(value: string) {
    this._ban_goat = value;
  }
}
