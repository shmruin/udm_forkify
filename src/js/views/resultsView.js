import View from './View.js';
import previewView from './previewView.js'
import icons from 'url:../../img/icons.svg'


class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe found for your query! Please try again ;)';
    _message = '';

    _generateMarkup() {
        // Render each preview as children views, render method with false just return strings
        return this._data.map(result => previewView.render(result, false)).join('');
    }
}

export default new ResultsView();