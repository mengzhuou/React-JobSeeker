import './App.css'

function App() {

  const onclick = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab.url){
      if (tab.url.startsWith('chrome://')) {
        alert('Cannot execute script on a chrome:// URL');
        return;
      }
  
      chrome.scripting.executeScript({
        target: { tabId: tab.id! },
        func: () => {
          alert('hello');
        }
      });
    }
  }

  return (
    <>
      <div className="card">
        <button onClick={() => onclick()}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
