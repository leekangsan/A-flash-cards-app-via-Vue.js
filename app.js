const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,

    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ];

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: "",
      newBack: "",
      error: false
    },
    methods: {
       toggleCard: function(card){
         card.flipped = !card.flipped;
       },
       createNewCard: function(){
         const newCard = {
           front: this.newFront,
           back: this.newBack,
           flipped: false
         }
         if(!this.newFront || !this.newBack){
           this.error = true;
         } else {
         this.cards.push(newCard);
         this.newFront = '';
         this.newBack = '';
         this.error = false;
       }
    }
  }
});
