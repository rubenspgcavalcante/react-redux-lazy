import { lazy } from "react";
import { connect } from "react-redux";

export default (
  mapStateToProps,
  mapDispatchToPropsPromise,
  ...rest
) => Component =>
  lazy(() =>
    mapDispatchToPropsPromise.then(mapDispatchToProps => ({
      default: connect(
        mapStateToProps,
        mapDispatchToProps,
        ...rest
      )(Component)
    }))
  );
