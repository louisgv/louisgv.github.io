import React from "react";

import {
	Button,
	Grid
} from 'semantic-ui-react';

export default ({name, color, url}, i) => (
	<Grid.Column stretched key={i}>
		<Button as='a' href={url} target='_blank' animated='fade' color={color} inverted size={'massive'} circular>
			<Button.Content visible>
				Work Sample #{i}
			</Button.Content>
			<Button.Content hidden style={{fontSize: "81%", lineHeight: "1em"}}>
				{name}
			</Button.Content>
		</Button>
	</Grid.Column>

)
