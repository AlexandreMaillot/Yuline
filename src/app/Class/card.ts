export class Card {
  id: string; // - ID or Passocde of the card.
  name : string;// Name of the card.
  private desc : string;// Card description/effect.
  private atk : number;// The ATK value of the card.
  private def : number;//The DEF value of the card.
  private type : string;// The type of card you are viewing (Normal Monster, Spell Card, Trap Card, etc)
  private level : number;// The Level/RANK of the card.
  private race : string;//The card race which is officially called type (Spellcaster, Warrior, Insect, etc)
  private attribute : string;// The attribute of the card.
  private scale : number;//The Pendulum Scale Value (only Pendulum monsters will have a scale value, otherwise NULL).
  private linkval : number;// The Link Value of the card if it's of type "Link Monster".
  private linkmarkers : number;//The Link Markers of the card if it's of type "Link Monster".
  private archetype : string;// The Archetype that the card belongs to. We take feedback on Archetypes here.
  private setcode : number;//Every Card Set this card belongs to.
  private ban_tcg : string;// status of the card on the TCG Ban List.
  private ban_ocg : string;//The status of the card on the OCG Ban List.
  private ban_goat : string;//The status of the card on the GOAT Format Ban List.


  constructor() {
  }
}
