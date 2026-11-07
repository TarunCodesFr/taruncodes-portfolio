const monoFont = import.meta.env.VITE_MONO_FONT === 'old' ? 'old' : 'nerd'

document.documentElement.dataset.mono = monoFont
