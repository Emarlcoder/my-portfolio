import Layout from '../components/Layout';

const _error = ({statusCode}) => {
  return (
    <Layout>
      {
        statusCode ? (
          <p className='text-center'>
          Ups! Something went wrong. Status code: {statusCode}
          </p>
        ): (
          <p className='text-center'>
          Ups! Something went wrong.
          </p>
        )
      }

    </Layout>
  );
};

export default _error;
