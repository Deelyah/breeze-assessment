import { connect } from 'react-redux';
import { curry } from 'ramda';
import RequiresPermissionComponent from './requires-permission';

function needsAuthentication(
  NotPermittedComponent,
  selector,
  PermittedComponent
) {
  // mapStateToProps lets me select an item from the store which is needed by the conncted components
  const mapStateToProps = (state) => ({
    NotPermittedComponent,
    PermittedComponent,
    hasPermission: selector(state)
  });
  return connect(mapStateToProps)(RequiresPermissionComponent);
}

// with the introduction of curry, f(a, b, c) = f(a)(b)(c) || f(a, b)(c) || f(a)(b,c)
export default curry(needsAuthentication);
