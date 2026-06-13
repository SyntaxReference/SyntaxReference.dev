import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">

				<div className="avatar avatar--vertical">
					<img src="img\logo.png" alt="Logo" className="avatar__photo avatar__photo--xl" />
				</div>

				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout
			title="Home"
			description="A syntax reference guide for multiple programming languages and others">
			<HomepageHeader />
			<main>
				<div className='container padding-horiz--xl padding-vert--xl'>
					<section >
						<div>
							<Heading as="h2">About</Heading>

							<p>At some point, we all have our notes, code snippets, Github Gists, and others. This Syntax Reference came to be from a struggle to have up-to-date syntax reference notes, from programming languages to terminal commands, queries, and so on.</p>
							<p>Programming languages are tools, each with its purpose and objective and we, developers, usually need to maintain or create projects in specific languages, which solve specific problems.</p>
							<p>It is easy to get the syntax mixed or not remember something specific. Some languages have a really specific syntax for something that is trivial in other languages, and that makes it difficult to remember.</p>
							<p>Although other websites address similar topics, I was not happy with its content organization and outdated content.</p>
							<p>Starting with <Link to="programming-languages/comments">Programming Languages</Link>, topics are organized into "concepts", and is focused on simplicity and code examples. This is not a language tutorial. It is expected from the reader experience in at least one language.</p>
							<p>There are a LOT of room for Improvement.</p>
							<p>This project is open-source, from developer to developer.</p>
							<p>If you wanna help, check out <Link href="https://github.com/SyntaxReference/SyntaxReference.dev">Github</Link>.</p>
						</div>
					</section>

					<section className=' padding-top--lg'>
						<div>
							<Heading as="h2">Current Avaliable Syntax</Heading>

							<ul>
								<li><Link to="programming-languages/comments">Programming Languages</Link></li>
							</ul>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	);
}
