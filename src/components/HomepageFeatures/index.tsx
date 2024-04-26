import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestión de servicios para tu empresa',
    Svg: require('@site/static/img/contracts.svg').default,
    description: (
      <>
        Administra los servicios que necesiten tus clientes con una facturación rapida y sencilla.
      </>
    ),
  },
  {
    title: 'Documentación entendible',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        En este sitio se encuentra la documentación de todo el proceso de desarrollo para nuestro producto.
      </>
    ),
  },
  {
    title: 'Desarrollo de calidad',
    Svg: require('@site/static/img/QA.svg').default,
    description: (
      <>
        Nuestro equipo de desarrollo está enfocado en la calidad del producto, para brindarle al usuario un software seguro.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
