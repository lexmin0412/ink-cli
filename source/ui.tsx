import React, {FC} from 'react';
import {Text} from 'ink';

const App: FC<{name?: string}> = ({name = 'Stranger'}) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
		<Text backgroundColor="green" color="white">Green</Text>
		<Text backgroundColor="#005cc5" color="white">Blue</Text>
		<Text backgroundColor="rgb(232, 131, 136)" color="white">Red</Text>
	</Text>
);

module.exports = App;
export default App;
