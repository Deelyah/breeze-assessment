import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { curry } from 'ramda';
import { userRoleIsAdmin } from '@/features/userProfile/user-profile-reducer';

function redirect(predicate, path) {
  const mapStateToProps = (state) => ({
    canRedirect: predicate(state),
    isAdmin: userRoleIsAdmin(state)
  });

  const connector = connect(mapStateToProps);

  return function (Component) {
    function RedirectComponent({ canRedirect, isAdmin, ...props }) {
      const router = useRouter();
      useEffect(() => {
        if (canRedirect) {
          if (['/admin', '/home'].includes(path)) {
            router.push(isAdmin ? '/admin' : '/home');
            return;
          }
          router.push(path);
        }
      }, [router, canRedirect]);
      return <Component {...props} />;
    }

    return connector(RedirectComponent);
  };
}

export default curry(redirect);
