import React from 'react';
interface InputMosaicProps {
  value: string; // Required prop
  className?: string; // Optional prop 
}

const TestInputMosaic: React.FC<InputMosaicProps> = ({ value, className }) => {
  
  return (
    <div className={className}>{value}
    </div>

  )
}

export default TestInputMosaic