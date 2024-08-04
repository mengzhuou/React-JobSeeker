import { useNavigate } from 'react-router-dom';
import React from 'react';

interface WithNavigateProps {
  navigate: ReturnType<typeof useNavigate>;
}

export const withFuncProps = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const Wrapper: React.FC<Omit<P, keyof WithNavigateProps>> = (props) => {
    const navigate = useNavigate();
    return (
      <Component
        {...(props as P)}
        navigate={navigate}
      />
    );
  };
  
  return Wrapper;
};
