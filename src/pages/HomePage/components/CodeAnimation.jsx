import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const CodeAnimation = () => {
  const [text] = useTypewriter({
    words: [
      '// Motor Control Algorithm',
      'void setup() {',
      '  motor.init();',
      '}',
      'void loop() {',
      '  if (sensor.isReady()) {',
      '    motor.setSpeed(100);',
      '  }',
      '}',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md h-64 font-mono text-sm text-green-400 overflow-hidden">
      <p>{text}<Cursor /></p>
    </div>
  );
};

export default CodeAnimation;
