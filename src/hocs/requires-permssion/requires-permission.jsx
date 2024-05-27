export default function RequiresPermissionComponent(props) {
  const { PermittedComponent, NotPermittedComponent, hasPermission } = props;
  return hasPermission ? (
    <PermittedComponent {...props} />
  ) : (
    <NotPermittedComponent {...props} loadingMessage='Please wait' />
  );
}
