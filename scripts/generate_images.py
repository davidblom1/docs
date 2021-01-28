from names import component_names
from PIL import Image

default_image = Image.open("../static/img/makers_logo.png")
rgb_im = default_image.convert('RGB')

for component_name in component_names:
    short_name = component_name.lower().replace(' ', '_')
    rgb_im.save('../static/img/components/{}.jpeg'.format(short_name))