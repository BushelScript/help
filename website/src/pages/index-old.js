class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const NavButtons = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <NavButtons>
            <Button href={docUrl('tutorial')}>Quick Tutorial</Button>
            <Button href={docUrl('ref')}>Reference</Button>
            <Button href={docUrl('integration')}>Integration</Button>
            <Button href={docUrl('internal')}>Internals</Button>
          </NavButtons>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Discord = () => (
      <Block>
        {[
          {
            // content: '<iframe src="https://discordapp.com/widget?id=689209232905470044&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>',
            // image:  `${baseUrl}img/undraw_operating_system.svg`,
            // imageAlign: 'bottom',
            title: 'Want more help? Join us on<br><a href="https://github.com/BushelScript/BushelScript/discussions">GitHub Discussions</a><br><a href="https://discord.gg/xdyCK9t">Discord</a>',
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <Discord />
      </div>
    );
  }
}

import Layout from "@theme/Layout";
import React from "react";

export default () => {
  return (
    <Layout title="BushelScript Help">
    
    </Layout>
  );
};
