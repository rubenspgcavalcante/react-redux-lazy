import { lazy } from 'react';
import { connect } from 'react-redux';

export default (
  maybeMapStateToProps,
  maybeMapDispatchToProps,
  maybeMergeProps,
  maybeOptions,
) => Component => {
  const asyncValues = Promise.all([
    maybeMapStateToProps,
    maybeMapDispatchToProps,
    maybeMergeProps,
    maybeOptions,
  ]);

  return lazy(() =>
    asyncValues.then(
      ([mapStateToProps, mapDispatchToProps, mergeProps, options]) => ({
        default: connect(
          mapStateToProps,
          mapDispatchToProps,
          mergeProps,
          options,
        )(Component),
      }),
    ),
  );
};
