import pandas as pd
import sys

def normalize_teams(path):
    csv = pd.read_csv(path)

    csv['']