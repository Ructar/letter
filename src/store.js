import { createStore } from "vuex";

export const store = createStore({
  state: {
    letter: {
      title: "Buisness Opportunities",
      paragraphs: [
        "Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name isb Apollo Lockheart. I am contacting you about a possible buisness opportunity.",
        "Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name isb Apollo Lockheart. I am contacting you about a possible buisness opportunity.",
        "Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name isb Apollo Lockheart. I am contacting you about a possible buisness opportunity.",
        "Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name is Apollo Lockheart. I am contacting you about a possible buisness opportunity. Hello my name isb Apollo Lockheart. I am contacting you about a possible buisness opportunity."
      ]
    }
  },
  getters: {
    letterTitle: (state) => {
      return state.letter.title;
    },
    letterParagraphs: (state) => {
      return state.letter.paragraphs;
    }
  }
});
