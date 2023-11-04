import pandas as pd
import sys

def merge_csv(key, path1, path2, pathoutput):
    csv1 = pd.read_csv(path1)
    csv2 = pd.read_csv(path2)

    merged_csv = pd.merge(csv1, csv2, on=key)

    merged_csv.to_csv(pathoutput, index=False)
    print(f"{path1} and {path2} merged into {pathoutput} based on column {key}")

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python merge_csv.py key file1.csv file2.csv output.csv")
        sys.exit(1)

    key_column = sys.argv[1]
    file_1 = sys.argv[2]
    file_2 = sys.argv[3]
    output_file = sys.argv[4]

    merge_csv(key_column, file_1, file_2, output_file)