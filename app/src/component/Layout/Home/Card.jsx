import React from 'react';

const cardStyle = {
  height: '440px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const titleStyle = {
  fontFamily: 'Greycliff CF, Arial, sans-serif',
  fontWeight: '900',
  color: 'white',
  lineHeight: '1.2',
  fontSize: '32px',
  marginTop: '8px',
};

const categoryStyle = {
  color: 'white',
  opacity: '0.7',
  fontWeight: '700',
  textTransform: 'uppercase',
};

function Card({ image, title, category }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        ...cardStyle,
      }}
    >
      <div>
        <span style={categoryStyle}>{category}</span>
        <h3 style={titleStyle}>{title}</h3>
      </div>
      <button style={{ backgroundColor: 'white', color: 'black' }}>Read article</button>
    </div>
  );
}

export default Card;
