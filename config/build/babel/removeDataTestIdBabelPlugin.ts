import {PluginItem} from '@babel/core';

export function removeDataTestIdBabelPlugin(): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbiddenProps = state.opts.props || []

        path.traverse({
          JSXIdentifier(current) {
            const nodename = current.node.name
            if (forbiddenProps.includes(nodename)) {
              current.parentPath.remove()
            }
          }
        })
      }
    }
  }
}