// SPDX-License-Identifier: Apache-2.0
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

const github = 'https://github.com/YaolinDong';

function Stat({value, label}) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Demo({name, title, children}) {
  const video = useBaseUrl(`/video/${name}.mp4`);
  const poster = useBaseUrl(`/img/${name}-poster.jpg`);
  return (
    <figure className="demo">
      <video controls muted loop playsInline preload="none" poster={poster}>
        <source src={video} type="video/mp4" />
      </video>
      <figcaption>
        <strong>{title}</strong>
        <span>{children}</span>
      </figcaption>
    </figure>
  );
}

function PathCard({to, title, children}) {
  return (
    <Link className="path-card" to={to}>
      <Heading as="h3">{title}</Heading>
      <p>{children}</p>
    </Link>
  );
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const zh = i18n.currentLocale === 'zh-Hans';
  const menu = useBaseUrl(`/img/lcd/${zh ? 'zh' : 'en'}/menu.png`);
  const gravity = useBaseUrl(`/img/lcd/${zh ? 'zh' : 'en'}/gravity.png`);
  return (
    <Layout
      title={translate({id: 'home.title', message: 'Open-source seven-axis arm'})}
      description={translate({
        id: 'home.description',
        message: 'InfraBot H7C: Damiao CAN FD joints, STM32H743 controller with 1 kHz control, C++ and Python SDK.',
      })}>
      <header className="hero-infrabot">
        <div className="hero-grid">
          <div>
            <Heading as="h1">InfraBot H7C</Heading>
            <p className="hero__subtitle">
              <Translate id="home.tagline">
                An open-source seven-axis arm. The STM32H743 controller runs the 1 kHz joint loop, gravity
                compensation, impedance and admittance on the arm. A PC connects over Ethernet.
              </Translate>
            </p>
            <div className="hero-actions">
              <Link className="button button--primary button--lg" to="/docs/get-started/choose-your-path">
                <Translate id="home.start">Get started</Translate>
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/safety">
                <Translate id="home.safety">Safety guide</Translate>
              </Link>
              <Link className="button button--secondary button--lg" href={`${github}/infrabot`}>
                GitHub
              </Link>
            </div>
          </div>
          <img
            src={useBaseUrl('/img/h7c-photo.jpg')}
            alt={translate({id: 'home.photo.alt', message: 'The InfraBot H7C arm'})}
          />
        </div>
        <div className="stats">
          <Stat value={translate({id: 'home.stat.joints', message: '7 + gripper'})} label={translate({id: 'home.stat.joints.label', message: 'Joints'})} />
          <Stat value="4.63 kg" label={translate({id: 'home.stat.mass.label', message: 'Arm mass, base included'})} />
          <Stat value="1 kHz" label={translate({id: 'home.stat.loop.label', message: 'Control loop on the MCU'})} />
          <Stat value="CAN FD" label={translate({id: 'home.stat.bus.label', message: '1 / 5 Mbit/s joint bus'})} />
          <Stat value="C++ · Python" label={translate({id: 'home.stat.sdk.label', message: 'SDK over Ethernet UDP'})} />
        </div>
      </header>
      <main>
        <section className="section">
          <Heading as="h2">
            <Translate id="home.paths">Start here</Translate>
          </Heading>
          <div className="paths">
            <PathCard to="/docs/get-started/view-the-model" title={translate({id: 'home.path.model', message: 'View the model'})}>
              <Translate id="home.path.model.text">Load the H7C URDF in RViz or another tool. No hardware needed.</Translate>
            </PathCard>
            <PathCard to="/docs/hardware/controller-board" title={translate({id: 'home.path.board', message: 'Build the controller'})}>
              <Translate id="home.path.board.text">Order the 4.3-inch carrier board from its Gerbers, BOM and CPL, then print its enclosure.</Translate>
            </PathCard>
            <PathCard to="/docs/firmware/control-modes" title={translate({id: 'home.path.firmware', message: 'Understand the firmware'})}>
              <Translate id="home.path.firmware.text">Control modes, stopping behaviour, the touchscreen and signed updates.</Translate>
            </PathCard>
            <PathCard to="/docs/software/sdk" title={translate({id: 'home.path.sdk', message: 'Program the arm'})}>
              <Translate id="home.path.sdk.text">Connect from C++ or Python, read state and stream commands.</Translate>
            </PathCard>
          </div>
        </section>
        <section className="section">
          <Heading as="h2">
            <Translate id="home.demos">Compliance on the controller</Translate>
          </Heading>
          <p>
            <Translate id="home.demos.text">
              Each mode runs at 1 kHz on the STM32H743 without a PC command stream. The arm is moved by hand in every
              clip. Videos are muted.
            </Translate>
          </p>
          <div className="demos">
            <Demo name="gravity-compensation" title={translate({id: 'home.demo.gravity', message: 'Gravity compensation'})}>
              <Translate id="home.demo.gravity.text">The arm floats and can be guided by hand.</Translate>
            </Demo>
            <Demo name="joint-impedance" title={translate({id: 'home.demo.jimp', message: 'Joint impedance'})}>
              <Translate id="home.demo.jimp.text">Each joint springs back to its equilibrium.</Translate>
            </Demo>
            <Demo name="cartesian-impedance" title={translate({id: 'home.demo.cimp', message: 'Cartesian impedance'})}>
              <Translate id="home.demo.cimp.text">The tool springs back to its pose.</Translate>
            </Demo>
            <Demo name="joint-admittance" title={translate({id: 'home.demo.jadm', message: 'Joint admittance'})}>
              <Translate id="home.demo.jadm.text">Joints follow a push as a virtual mass.</Translate>
            </Demo>
            <Demo name="cartesian-admittance" title={translate({id: 'home.demo.cadm', message: 'Cartesian admittance'})}>
              <Translate id="home.demo.cadm.text">The tool follows a push as a virtual mass.</Translate>
            </Demo>
          </div>
        </section>
        <section className="section">
          <Heading as="h2">
            <Translate id="home.screens">On the controller</Translate>
          </Heading>
          <p>
            <Translate id="home.screens.text">
              The touchscreen works without a PC. It enables the drives, switches modes, tunes compliance and stops the
              arm from any page. The interface is available in English and Simplified Chinese.
            </Translate>
          </p>
          <div className="screens">
            <img src={menu} alt={translate({id: 'home.screen.menu', message: 'Touchscreen main menu'})} />
            <img src={gravity} alt={translate({id: 'home.screen.gravity', message: 'Gravity compensation page'})} />
          </div>
          <p style={{textAlign: 'center', marginTop: '1rem'}}>
            <Link to="/docs/firmware/touchscreen">
              <Translate id="home.screens.all">See every page of the touchscreen</Translate>
            </Link>
          </p>
        </section>
        <section className="section" style={{paddingBottom: '3rem'}}>
          <div className="admonition admonition-warning alert alert--warning">
            <Translate id="home.warning">
              InfraBot is a research arm, not a certified industrial or collaborative robot. Its software stop does not
              remove drive power. Wire an independent hardware emergency stop before the first power-up.
            </Translate>{' '}
            <Link to="/docs/safety">
              <Translate id="home.warning.link">Read the safety guide.</Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
