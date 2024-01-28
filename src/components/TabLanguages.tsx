
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function TabLanguages({
	c = "TODO",
	cpp = "TODO",
	csharp = "TODO",
	java = "TODO",
	rust = "TODO",
	go = "TODO",
	javascript = "TODO",
	typescript = "TODO",
	python = "TODO"
}) {
	return (
		<Tabs groupId="language" queryString>
			<TabItem value="c" label="C" default>
				{c}
			</TabItem>
			<TabItem value="cpp" label="C++">
				{cpp}
			</TabItem>
			<TabItem value="csharp" label="C#">
				{csharp}
			</TabItem>
			<TabItem value="java" label="Java">
				{java}
			</TabItem>
			<TabItem value="rust" label="Rust">
				{rust}
			</TabItem>
			<TabItem value="go" label="Go">
				{go}
			</TabItem>
			<TabItem value="javascript" label="Javascript">
				{javascript}
			</TabItem>
			<TabItem value="typescript" label="Typescript">
				{typescript}
			</TabItem>
			<TabItem value="python" label="Python">
				{python}
			</TabItem>
		</Tabs>
	)
}
