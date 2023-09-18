const WordsContext = React.createContext();

function WordsContextProvider({ children }) {
  return <WordsContext.Provider value={""}>{children}</WordsContext.Provider>;
}

export { WordsContextProvider, WordsContext };
