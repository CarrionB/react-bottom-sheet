import React from 'react';
import Sheet from 'react-modal-sheet';
import { Button } from 'reactstrap';
import './App.css'

const  Example = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(!isOpen)}>Abrir</button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 250, 100, 0]}
        initialSnap={1}
      >
        <Sheet.Container>
          <Sheet.Header/>
          <Sheet.Content>
            <div className='p-2'>
              <div className='header-container'>
                <img 
                  className='logo' 
                  src="https://impartialreader.com/icons/windows11/Square44x44Logo.scale-125.png" 
                  alt="logo"/>
                <div className='title-container'>
                  Impartial Reader
                  <div className='url'>
                    impartialreader.com
                  </div>
                </div>
                <div className='button-container'>
                  <Button className='rounded-pill install-button' color='primary'>Install</Button>
                </div>
              </div>
              <div className='gallery'>
                <img 
                  className='image' 
                  src="https://impartialreader.com/screenshots/impartial1.png" 
                  alt="screenshot1"/>
                <img 
                  className='image' 
                  src="https://impartialreader.com/screenshots/impartial2.png" 
                  alt="screenshot2"/>
                <img 
                  className='image' 
                  src="https://impartialreader.com/screenshots/impartial3.png" 
                  alt="screenshot3"/>
                <img 
                  className='image' 
                  src="https://impartialreader.com/screenshots/impartial4.png" 
                  alt="screenshot4"/>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}

export default Example