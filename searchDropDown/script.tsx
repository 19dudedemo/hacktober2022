interface Hint {
  id: number;
  txt: string;
}

const MOCK_HINTS: Hint[] = [
  { id: 1, txt: 'This is just a test' },
  { id: 2, txt: 'Forgot to tell you something, wanna know what?' },
  { id: 3, txt: 'This is another test to see how things will look.' },
  { id: 4, txt: 'Something new' },
  { id: 5, txt: 'Learn react in 10min' },
  { id: 6, txt: 'Coding is fun give it a try' },
  { id: 7, txt: 'lets play' },
  { id: 8, txt: 'example for use later' },
  { id: 9, txt: 'differences between react and angular' },
  { id: 10, txt: 'One last item' }
];

const formatter = (item: Hint) => <li>{item.txt}</li>;

interface SearchDropdownProps {
  val: string;
  hints: string[];
  onChange(item: Hint): void;
  formatListItem?(item: Hint): void;
  onSubmit(item: Hint): void;
}

const SearchDropdown = ({ 
  val, 
  onChange, 
  hints = [], 
  onSubmit, 
  formatListItem = false 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleListItemSelect = item => {
    onChange(item.txt);
    onSubmit(item.txt);
    setIsOpen(false);
  }
  
  return (
    <div className={`SearchDropdown ${isOpen ? 'active' : ''}`}>
      <input
        type="text" 
        value={val}
        placeholder="Search..." 
        onKeyUp={e => {
          if (e.which === 13) {
            onSubmit(val);
            setIsOpen(false);
          }
        }}
        onChange={e => {
          if(!isOpen) {
            setIsOpen(true);
          }
          onChange(e.target.value)
        }
        onFocus={() => setIsOpen(true)} 
      />
      <div className="SearchDropdown--dropdown">
        {hints.length > 0 && (
          <ul>
            {hints.map(hint => {
              if(formatListItem) {
                formatListItem(hint)
              } else {
                return (
                  <li
                    key={hint.id} 
                    onClick={() => handleListItemSelect(hint)}
                  >
                    {hint.txt}
                  </li>
                );
              }
            }}
          </ul>
        )}
      </div>
    </div>
  )
}

const App = () => {
  const [val, setVal] = React.useState('');
  const [hints, setHints] = React.useState([]);
  
  React.useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 11);
    const newHints = [...MOCK_HINTS.slice(0, randomNumber)];
    setHints(newHints);
  }, [val]);
  
  return (
    <div className="App">
      <h1>A simple search dropdown list component</h1>
      <SearchDropdown 
        val={val} 
        hints={hints}
        onChange={newVal => setVal(newVal)} 
        onSubmit={newVal => {
          setVal(newVal);        
          console.log(newVal);
        }}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
