        return function ${makeLegalFunctionName(humanName)}(${argsList}) {
        if (arguments.length !== ${argCount-2}) {
          throwBindingError('function ${humanName} called with ${arguments.length} arguments, expected ${argCount-2} args!');