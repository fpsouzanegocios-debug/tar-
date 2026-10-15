import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReset = () => {
    localStorage.removeItem('active_reading_draft');
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#1B1026] text-[#F7EEFB] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-6 rounded-3xl bg-[#2A1B36] border border-[#E1C38B]/30 space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#F7EEFB]">
              Algo inesperado aconteceu
            </h2>
            <p className="text-xs text-[#C1AFCE] leading-relaxed">
              Ocorreu uma pequena instabilidade ao carregar a visualização. Suas tiragens e anotações continuam seguras.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full py-3.5 px-5 rounded-2xl bg-[#E1C38B] text-[#1B1026] font-semibold text-sm hover:bg-[#F4DFB8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recarregar aplicativo</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
