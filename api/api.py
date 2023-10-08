from flask import Flask, jsonify
from beautifulSoap import extract_elements_for_anchor

app = Flask(__name__)

# Defina a rota da API
@app.route('/api/extract_data/<anchor>', methods=['GET'])
def get_data(anchor):
    base_url = "https://www.usgs.gov/science/science-explorer/climate"
    
    elements = extract_elements_for_anchor(base_url, anchor)
    
    if elements is not None:
        return jsonify(elements)
    else:
        return jsonify({'error': 'Failed to retrieve data for anchor'}), 500

if __name__ == '__main__':
    app.run(debug=True)