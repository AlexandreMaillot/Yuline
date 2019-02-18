export class Card {
  id : string; // - ID or Passocde of the card.
  name : string;// Name of the card.
   desc : string;// Card description/effect.
   atk : number;// The ATK value of the card.
   def : number;//The DEF value of the card.
   type : string;// The type of card you are viewing (Normal Monster, Spell Card, Trap Card, etc)
   level : number;// The Level/RANK of the card.
   race : string;//The card race which is officially called type (Spellcaster, Warrior, Insect, etc)
   attribute : string;// The attribute of the card.
   scale : number;//The Pendulum Scale Value (only Pendulum monsters will have a scale value, otherwise NULL).
   linkval : number;// The Link Value of the card if it's of type "Link Monster".
   linkmarkers : number;//The Link Markers of the card if it's of type "Link Monster".
   archetype : string;// The Archetype that the card belongs to. We take feedback on Archetypes here.
   setcode : number;//Every Card Set this card belongs to.
   ban_tcg : string;// status of the card on the TCG Ban List.
   ban_ocg : string;//The status of the card on the OCG Ban List.
   ban_goat : string;//The status of the card on the GOAT Format Ban List.


  constructor() {
  }

  get gid(): string {
    return this.id;
  }
}
